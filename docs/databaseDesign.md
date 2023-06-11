# 数据库设计

## 供应商分类表 supplierType

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 名称     | name       | TEXT     |
| 父类名称 | parentUId  | TEXT     |
| 创建时间 | createTime | DATETIME |
| 修改时间 | updateTime | DATETIME |

## 供应商表 supplier

| 中文名       | 英文名     | 类型     |
| ------------ | ---------- | -------- |
| 主键         | uid        | TEXT     |
| 编号         | id         | TEXT     |
| 供应商分类   | typeUid    | TEXT     |
| 供应商名称   | name       | TEXT     |
| 简名         | shortName  | TEXT     |
| 拼音码       | pinyinCode | TEXT     |
| 联系人       | contact    | TEXT     |
| 联系电话     | phone      | TEXT     |
| 邮箱         | email      | TEXT     |
| 地址         | address    | TEXT     |
| 纳税人识别号 | tin        | TEXT     |
| 备注         | remark     | TEXT     |
| 创建时间     | createTime | DATETIME |
| 修改时间     | updateTime | DATETIME |

## 客户分类表 customerType

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 名称     | name       | TEXT     |
| 父类名称 | parentId   | TEXT     |
| 创建时间 | createTime | DATETIME |
| 修改时间 | updateTime | DATETIME |

## 客户表 customer

| 中文名       | 英文名     | 类型     |
| ------------ | ---------- | -------- |
| 主键         | uid        | TEXT     |
| 编号         | id         | TEXT     |
| 客户分类     | typeUid    | TEXT     |
| 客户名称     | name       | TEXT     |
| 简名         | shortName  | TEXT     |
| 拼音码       | pinyinCode | TEXT     |
| 联系人       | contact    | TEXT     |
| 联系电话     | phone      | TEXT     |
| 邮箱         | email      | TEXT     |
| 地址         | address    | TEXT     |
| 纳税人识别号 | tin        | TEXT     |
| 备注         | remark     | TEXT     |
| 创建时间     | createTime | DATETIME |
| 修改时间     | updateTime | DATETIME |

## 商品分类表 productType

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 名称     | name       | TEXT     |
| 父类名称 | parentId   | TEXT     |
| 创建时间 | createTime | DATETIME |

## 品牌表 brand

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uuid       | TEXT     |
| 名称     | name       | TEXT     |
| 创建时间 | createTime | DATETIME |

## 商品图片表 productImage

| 中文名   | 英文名     | 类型 |
| -------- | ---------- | ---- |
| 主键     | uid        |
| 商品主键 | productUid |
| 图片信息 |
| 创建时间 |

## 商品标签表 productTag

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 编号     | id         | TEXT     |
| 名称     | name       | TEXT     |
| 创建时间 | createTime | DATETIME |

## 商品商品标签连接表 productAndProductTag

| 中文名   | 英文名        | 类型     |
| -------- | ------------- | -------- |
| 主键     | uid           | TEXT     |
| 商品uid  | productUid    | TEXT     |
| 标签uid  | productTagUid | TEXT     |
| 创建时间 | createTime    | DATETIME |

## 商品表 product

| 中文名   | 英文名         | 类型     |
| -------- | -------------- | -------- |
| 主键     | uid            | TEXT     |
| 编号     | id             | TEXT     |
| 商品分类 | productTypeUid | TEXT     |
| 商品名称 | name           | TEXT     |
| 简名     | shortName      | TEXT     |
| 拼音码   | pinyinCode     | TEXT     |
| 单位     | unit           | TEXT     |
| 规格     | specification  | TEXT     |
| 型号     | model          | TEXT     |
| 品牌     | brandUid       | TEXT     |
| 产地     | origin         | TEXT     |
| 成本价   | costPrice      | TEXT     |
| 备注     | remark         | TEXT     |
| 创建时间 | createTime     | DATETIME |
| 修改时间 | updateTime     | DATETIME |

## 仓库表 storeHouse

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 编号     | id         | TEXT     |
| 仓库名称 | name       | TEXT     |
| 简名     | shortName  | TEXT     |
| 拼音码   | pinyinCode | TEXT     |
| 地址     | address    | TEXT     |
| 联系人   | contact    | TEXT     |
| 联系电话 | phone      | TEXT     |
| 创建时间 | createTime | DATETIME |
| 修改时间 | updateTime | DATETIME |

## 部门表 department

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 编号     | id         | TEXT     |
| 名称     | name       | TEXT     |
| 联系人   | contact    | TEXT     |
| 联系电话 | phone      | TEXT     |
| 备注     | remark     | TEXT     |
| 创建时间 | createTime | DATETIME |

## 员工表 employee

| 中文名     | 英文名            | 类型     |
| ---------- | ----------------- | -------- |
| 主键       | uid               | TEXT     |
| 编号       | id                | TEXT     |
| 姓名       | realName          | TEXT     |
| 性别       | sex               | TEXT     |
| 身份证号码 | idCardNumber      | TEXT     |
| 生日       | birthday          | TEXT     |
| 手机       | phone             | TEXT     |
| 邮箱       | email             | TEXT     |
| 银行名称   | bankName          | TEXT     |
| 银行账号   | bankAccoutNumber  | TEXT     |
| 入职日期   | HireDate          | DATE     |
| 部门Uid    | departmentUid     | TEXT     |
| 学历       | education         | TEXT     |
| 岗位       | position          | TEXT     |
| 职称       | professionalTitle | TEXT     |
| 创建时间   | createTime        | DATETIME |

## 员工系统用户表 employeeAndSystemUser

| 中文名      | 英文名        | 类型     |
| ----------- | ------------- | -------- |
| 主键        | uid           | TEXT     |
| 员工Uid     | employeeUid   | TEXT     |
| 系统用户Uid | systemUserUid | TEXT     |
| 创建时间    | createTime    | DATETIME |

## 系统用户表 systemUser

| 中文名   | 英文名       | 类型     |
| -------- | ------------ | -------- |
| 主键     | uid          | TEXT     |
| 编号     | id           | TEXT     |
| 登入名   | name         | TEXT     |
| 密码哈希 | passwordHash | TEXT     |
| 密码盐   | passwordSalt | TEXT     |
| 权限Uid  | roleUid      | TEXT     |
| 姓名     | realName     | TEXT     |
| 电话     | phone        | TEXT     |
| 邮箱     | email        | TEXT     |
| 创建时间 | createTime   | DATETIME |
| 修改时间 | updateTime   | DATETIME |

## 权限表 permissions

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 名称     | name       | TEXT     |
| 创建时间 | createTime | DATETIME |
| 修改时间 | updateTime | DATETIME |

## 角色表 role

| 中文名   | 英文名     | 类型     |
| -------- | ---------- | -------- |
| 主键     | uid        | TEXT     |
| 名称     | name       | TEXT     |
| 创建时间 | createTime | DATETIME |
| 修改时间 | updateTime | DATETIME |

## 角色权限关系表 roleAndPermissions

| 中文名   | 英文名         | 类型     |
| -------- | -------------- | -------- |
| 主键     | uid            | TEXT     |
| 角色Uid  | roleUid        | TEXT     |
| 权限Uid  | permissionsUid | TEXT     |
| 创建时间 | createTime     | DATETIME |
| 修改时间 | updateTime     | DATETIME |

## 采购订单表 purchaseOrder

| 中文名    | 英文名      | 类型     |
| --------- | ----------- | -------- |
| 主键      | uid         | TEXT     |
| 编号      | id          | TEXT     |
| 供应商uid | supplierUid | TEXT     |
| 经手员工  | employeeUid | TEXT     |
| 备注      | remark      | TEXT     |
| 创建时间  | createTime  | DATETIME |

## 商品采购订单表 productAndPurchaseOrder

| 中文名      | 英文名           | 类型     |
| ----------- | ---------------- | -------- |
| 主键        | uid              | TEXT     |
| 编号        | id               | TEXT     |
| 商品uid     | productUid       | TEXT     |
| 采购订单uid | purchaseOrderUid | TEXT     |
| 价格        | price            | NUMERIC  |
| 数量        | count            | NUMERIC  |
| 创建时间    | createTime       | DATETIME |

## 采购退换货表

## 入库单表

## 销售订单表

## 销售换货单表

## 出库单表				
