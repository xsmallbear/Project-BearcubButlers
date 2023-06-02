# systemUser

## /systemUser/login（POST）登入

### 请求

| 参数       | 类型   | 说明  |
|----------|------|-----|
| userName | body | 用户名 |
| password | body | 密码  |

### 响应

| 参数       | 说明    |
|----------|-------|
| state    | 是否成功  |
| message? | 错误信息  |
| token?   | jwt验证 |

## /systemUser/register (POST) 注册

### 请求

| 参数       | 类型   | 说明    |
|----------|------|-------|
| id       | body | 唯一的id |
| userName | body | 登入名   |
| password | body | 登入密码  |
| realName | body | 真实姓名  ||
| phone    | body | 手机号   |
| email    | body | 邮箱    |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /systemUser/updatePwd (POST) 更改密码

### 请求

| 参数          | 类型   | 说明  |
|-------------|------|-----|
| userName    | body | 登入名 |
| oldPassword | body | 原密码 |
| newPassword | body | 新密码 |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

# supplierType

## /supplierType (GET) 获取供应商全部列表

### 请求

| 参数     | 类型    | 说明         |
|--------|-------|------------|
| limit  | query | 每页显示的记录数量  |
| offset | query | 从第几条数据开始显示 |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| datas | 查询结果 |

## /supplierType/:{supplierUid} (GET) 获取单个供应商分类信息

### 请求

| 参数          | 类型    | 说明      |
|-------------|-------|---------|
| supplierUid | param | 供应商的uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| data  | 查询结果 |

## /supplierType (POST) 创建一个新的供应商分类

### 请求

| 参数        | 类型   | 说明     |
|-----------|------|--------|
| name      | body | 名称     |
| parentUId | body | 父类的uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /supplierType/:{supplierTypeUid} (PUT) 修改一个供应商分类信息

### 请求

| 参数        | 类型   | 说明       |
|-----------|------|----------|
| name      | body | 新的名称     |
| parentUId | body | 新的父类的uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /supplierType/:{supplierTypeUid} (DELETE) 删除一个供应商分类

### 请求

| 参数              | 类型    | 说明     |
|-----------------|-------|--------|
| supplierTypeUid | query | 供应商uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

# supplier

## /supplier (GET) 获取所有供应商信息

### 请求

| 参数     | 类型    | 说明         |
|--------|-------|------------|
| limit  | query | 每页显示的记录数量  |
| offset | query | 从第几条数据开始显示 |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| datas | 查询结果 |

## /supplier/:{supplierUid} (GET) 获取单个供应商分类信息

### 请求

| 参数          | 类型    | 说明     |
|-------------|-------|--------|
| supplierUid | param | 供应商uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| data  | 查询结果 |

## /supplier/ (POST) 创建一个新的供应商

### 请求

| 参数          | 类型   | 说明        |
|-------------|------|-----------|
| id          | body | 唯一的id     |
| typeUid     | body | 供应商分类的uid |
| name        | body | 供应商名称     |
| shortName?  | body | 简名        |
| pinyinCode? | body | 拼音码       |
| contact?    | body | 联系人       |
| phone?      | body | 联系人手机号    |
| email?      | body | 邮箱        |
| address?    | body | 地址        |
| tin?        | body | 纳税人识别号    |
| remark?     | body | 备注        |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /supplier/:{supplierUid} (PUT) 修改一个供应商的信息

### 请求

| 参数          | 类型    | 说明           |
|-------------|-------|--------------|
| supplierUid | param | 供应商uid       |
| id          | body  | 修改的唯一的id     |
| typeUid     | body  | 修改的供应商分类的uid |
| name        | body  | 修改的供应商名称     |
| shortName?  | body  | 修改的简名        |
| pinyinCode? | body  | 修改的拼音码       |
| contact?    | body  | 修改的联系人       |
| phone?      | body  | 修改的联系人手机号    |
| email?      | body  | 修改的邮箱        |
| address?    | body  | 修改的地址        |
| tin?        | body  | 修改的纳税人识别号    |
| remark?     | body  | 修改的备注        |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| datas | 查询结果 |

## /supplier/:{supplierUid} (DELETE) 删除一个供应商

### 请求

| 参数          | 类型    | 说明     |
|-------------|-------|--------|
| supplierUid | param | 供应商uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |
| data  | 查询结果 |

# role

## /role (GET) 获取所有的角色信息

### 请求

| 参数     | 类型    | 说明         |
|--------|-------|------------|
| limit  | query | 每页显示的记录数量  |
| offset | query | 从第几条数据开始显示 |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /role/:{roleUid} (GET) 获取单个角色信息

### 请求

| 参数      | 类型    | 说明     |
|---------|-------|--------|
| roleUid | param | 角色的Uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /role (POST) 创建一个新的角色

### 请求

| 参数   | 类型   | 说明     |
|------|------|--------|
| name | body | 新角色的名称 |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /role/:{roleUid} (PUT) 修改一个角色信息

### 请求

| 参数      | 类型    | 说明     |
|---------|-------|--------|
| roleUid | param | 角色的Uid |
| name    | body  | 修改的名称  |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |

## /role/:{roleUid} (DELETE) 删除一个角色信息

### 请求

| 参数      | 类型    | 说明     |
|---------|-------|--------|
| roleUid | param | 角色的Uid |

### 响应

| 参数    | 说明   |
|-------|------|
| state | 是否成功 |