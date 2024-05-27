export const currencyEnum = new Map([
  ['USD', '$'],
  ['CNY', '¥'],
  ['IDR', 'Rp'],
])

export const CPMErrorMap = new Map([
  [
    'CPM0001',
    new Map([
      ['zh', '请输入 unique_id'],
      ['en', 'Please enter unique_id'],
      ['id', 'Silakan masukkan unique_id'],
    ]),
  ],
  [
    'CPM0002',
    new Map([
      ['zh', '请输入单条视频价格'],
      ['en', 'Please enter the price of a single video'],
      ['id', 'Silakan masukkan harga video tunggal'],
    ]),
  ],
])
