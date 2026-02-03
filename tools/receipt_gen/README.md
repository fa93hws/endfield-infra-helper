# 数据生成工具

本目录包含从 CSV 文件自动生成 TypeScript 代码的工具。

## 目录结构

```
receipt_gen/
├── csv/                    # CSV 源数据
│   ├── items.csv          # 物品数据
│   └── receipts.csv       # 配方数据
├── generate_items.ts      # 物品数据生成器
├── generate_receipts.ts   # 配方数据生成器
└── index.ts               # 生成器入口
```

## 使用方法

### 更新数据

1. 编辑 CSV 文件：
   - `csv/items.csv` - 物品数据
   - `csv/receipts.csv` - 配方数据

2. 运行生成器：

   ```bash
   pnpm run autogen
   ```

3. 生成的文件会自动更新到 `src/receipts/generated/`：
   - `src/receipts/generated/items.ts`
   - `src/receipts/generated/receipts.ts`

## CSV 格式说明

### items.csv

物品数据文件，包含所有游戏物品的信息。

**格式**：

```csv
category,id,english_name,chinese_name
```

**字段说明**：

- `category`: 物品类别（使用 snake_case）
  - `natural_ore` - 天然矿石
  - `natural_plant` - 天然植物
  - `plant_seed` - 植物种子
  - `ore_refined` - 精炼矿石
  - `ore_powder` - 矿石粉末
  - `plant_powder` - 植物粉末
  - `bottle` - 瓶子
  - `battery` - 电池
  - `part` - 零件
  - `component` - 组件
  - `medicine` - 药品
  - `solution` - 溶液
  - `bottled_solution` - 瓶装溶液
  - `other` - 其他
- `id`: 物品唯一标识符（使用 snake_case）
- `english_name`: 英文名称
- `chinese_name`: 中文名称

**示例**：

```csv
category,id,english_name,chinese_name
ore_refined,carbon,Carbon,碳
battery,battery_valley_hc,High Capacity Valley Battery,高容谷底电池
natural_plant,buckflower,Buckflower,荞花
```

**注意事项**：

- 文件应按 category 和 id 字母顺序排序
- 每个物品的 id 必须在 `public/images/items/` 中有对应的 `{id}.webp` 图片文件

### receipts.csv

配方数据文件，定义物品的生产配方。

**格式**：

```csv
out_1_item,out_1_qty,in_1_item,in_1_qty,in_2_item,in_2_qty
```

**字段说明**：

- `out_N_item`: 第 N 个输出物品的 id
- `out_N_qty`: 第 N 个输出物品的每分钟产量
- `in_N_item`: 第 N 个输入物品的 id
- `in_N_qty`: 第 N 个输入物品的每分钟消耗量

**示例**：

```csv
out_1_item,out_1_qty,in_1_item,in_1_qty,in_2_item,in_2_qty
carbon,30,buckflower,30,,
amethyst_component,6,amethyst_part,30,origocrust,30
ferrium_bottle,30,ferrium,30,origocrust,30
```

**注意事项**：

- 如果某个输入或输出位置为空，对应的 item 和 qty 字段都留空
- 所有引用的 item id 必须在 items.csv 中存在
- 所有数量必须是正数

## 生成的代码

### items.ts

生成的物品数据文件包含：

```typescript
// 物品类别枚举
export enum ItemCategory {
  natural_ore = 'natural_ore',
  natural_plant = 'natural_plant',
  // ...
}

// 物品接口
export interface Item {
  label: string;
  category: ItemCategory;
  imagePath: string;
}

// 物品数据
export const items: Record<string, Item> = {
  carbon: {
    label: '碳',
    category: ItemCategory.ore_refined,
    imagePath: '/images/items/carbon.webp',
  },
  // ...
};
```

### receipts.ts

生成的配方数据文件包含：

```typescript
// 配方项接口
export interface ReceiptItem {
  item: string;
  perMin: number;
}

// 配方接口
export interface Receipt {
  inputs: ReceiptItem[];
  outputs: ReceiptItem[];
}

// 配方数据
export const receipts: Receipt[] = [
  {
    inputs: [{ item: 'buckflower', perMin: 30 }],
    outputs: [{ item: 'carbon', perMin: 30 }],
  },
  // ...
];
```

## 数据完整性验证

项目包含自动化测试确保数据完整性（`tests/receipts/data_integrity.test.ts`）：

### 图片文件验证

- 所有物品都有对应的图片文件在 `public/images/items/`

### 配方覆盖验证

- 所有制造物品（除 natural_plant、natural_ore、plant_seed、other）都在至少一个配方的输出中
- 所有 AIC 产品都有至少一个生产配方
- 天然资源不应该有生产配方

### 引用完整性验证

- 配方中的所有输入和输出物品都在 items.csv 中存在
- 配方输入可以是 AIC 产品或天然资源
- 配方输出必须是 AIC 产品（不能是天然资源）

### 结构验证

- 所有配方至少有一个输入和一个输出
- 所有数量都是正数

运行测试：

```bash
pnpm test tests/receipts/data_integrity.test.ts
```

## 开发

### 修改生成器

生成器由两个纯函数组成：

- `genItems(csvPath: string): string` - 从 items.csv 生成 TypeScript 代码
- `genReceipts(csvPath: string): string` - 从 receipts.csv 生成 TypeScript 代码

这些函数是纯函数，只负责生成代码字符串。文件 I/O 由 `index.ts` 处理。

### 测试生成器

生成器有自动化测试确保生成的代码与提交的文件一致：

```bash
pnpm test tests/tools/receipt_gen/autogen.test.ts
```

如果测试失败，说明 CSV 文件已更新但生成的代码未更新。运行 `pnpm run autogen` 更新生成的文件。
