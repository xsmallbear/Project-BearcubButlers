BEGIN TRANSACTION;
DROP TABLE IF EXISTS "customerType";
CREATE TABLE IF NOT EXISTS "customerType" (
	"uid"	TEXT,
	"name"	TEXT NOT NULL,
	"parentId"	TEXT,
	"createTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "productType";
CREATE TABLE IF NOT EXISTS "productType" (
	"uid"	TEXT,
	"name"	TEXT NOT NULL,
	"parentId"	TEXT,
	"createTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "productTag";
CREATE TABLE IF NOT EXISTS "productTag" (
	"uid"	TEXT,
	"id"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "brand";
CREATE TABLE IF NOT EXISTS "brand" (
	"uuid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	PRIMARY KEY("uuid")
);
DROP TABLE IF EXISTS "storeHouse";
CREATE TABLE IF NOT EXISTS "storeHouse" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"shortName"	TEXT,
	"pinyinCode"	TEXT,
	"address"	TEXT,
	"contact"	TEXT,
	"phone"	TEXT CHECK("phone" LIKE '1[3456789][0-9]{9}'),
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "systemUser";
CREATE TABLE IF NOT EXISTS "systemUser" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"passwordHash"	TEXT NOT NULL,
	"passwordSalt"	TEXT NOT NULL,
	"realName"	TEXT,
	"phone"	TEXT,
	"email"	TEXT,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "department";
CREATE TABLE IF NOT EXISTS "department" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"contact"	TEXT,
	"phone"	TEXT,
	"remark"	TEXT,
	"createTime"	DATETIME,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "employee";
CREATE TABLE IF NOT EXISTS "employee" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"realName"	TEXT NOT NULL,
	"sex"	BLOB NOT NULL,
	"idCardNumber"	TEXT,
	"birthday"	DATE,
	"phone"	TEXT CHECK("phone" LIKE '1[3456789][0-9]{9}'),
	"email"	TEXT,
	"bankName"	TEXT,
	"bankAccountNumber"	TEXT,
	"hireDate"	DATETIME,
	"departmentUid"	TEXT NOT NULL,
	"deucation"	TEXT,
	"position"	TEXT,
	"professionalTitle"	TEXT,
	"createTime"	DATETIME NOT NULL,
	FOREIGN KEY("departmentUid") REFERENCES "department"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "employeeAndSystemUser";
CREATE TABLE IF NOT EXISTS "employeeAndSystemUser" (
	"uid"	TEXT NOT NULL,
	"employeeUid"	TEXT NOT NULL,
	"systemUserUid"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	FOREIGN KEY("employeeUid") REFERENCES "employee"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "product";
CREATE TABLE IF NOT EXISTS "product" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"productTypeUid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"shortName"	TEXT,
	"pinyinCode"	TEXT,
	"unit"	TEXT NOT NULL,
	"specification"	TEXT,
	"model"	TEXT,
	"brandUid"	TEXT NOT NULL,
	"origin"	TEXT,
	"costPrice"	TEXT,
	"remark"	TEXT,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	FOREIGN KEY("brandUid") REFERENCES "brand"("uuid"),
	FOREIGN KEY("productTypeUid") REFERENCES "productType"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "purchaseOrder";
CREATE TABLE IF NOT EXISTS "purchaseOrder" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"supplierUid"	TEXT NOT NULL,
	"employeeUid"	TEXT NOT NULL,
	"remark"	TEXT,
	"createTime"	DATETIME NOT NULL,
	FOREIGN KEY("supplierUid") REFERENCES "supplier"("uid"),
	FOREIGN KEY("employeeUid") REFERENCES "employee"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "customer";
CREATE TABLE IF NOT EXISTS "customer" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"typeUid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"shortName"	TEXT,
	"pinyinCode"	TEXT,
	"contact"	TEXT,
	"phone"	TEXT CHECK("phone" LIKE '1[3456789][0-9]{9}'),
	"email"	TEXT,
	"address"	TEXT,
	"tin"	TEXT,
	"remark"	TEXT,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "productAndProductTag";
CREATE TABLE IF NOT EXISTS "productAndProductTag" (
	"uid"	TEXT,
	"productUid"	TEXT NOT NULL,
	"productTagUid"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	FOREIGN KEY("productTagUid") REFERENCES "productTag"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "supplierType";
CREATE TABLE IF NOT EXISTS "supplierType" (
	"uid"	TEXT,
	"name"	TEXT NOT NULL,
	"parentUid"	TEXT,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "supplier";
CREATE TABLE IF NOT EXISTS "supplier" (
	"uid"	TEXT,
	"id"	TEXT NOT NULL,
	"typeUid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"shortName"	TEXT,
	"pinyinCode"	TEXT,
	"contact"	TEXT,
	"phone"	TEXT,
	"email"	TEXT,
	"address"	TEXT,
	"tin"	TEXT,
	"remark"	TEXT,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	FOREIGN KEY("typeUid") REFERENCES "supplierType"("uid"),
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "permissions";
CREATE TABLE IF NOT EXISTS "permissions" (
	"uid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "role";
CREATE TABLE IF NOT EXISTS "role" (
	"uid"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
DROP TABLE IF EXISTS "productAndPurchaseOrder";
CREATE TABLE IF NOT EXISTS "productAndPurchaseOrder" (
	"uid"	TEXT NOT NULL,
	"id"	TEXT NOT NULL,
	"productUid"	TEXT NOT NULL,
	"purchaseOrderUid"	TEXT NOT NULL,
	"price"	NUMERIC NOT NULL,
	"count"	NUMERIC,
	"createTime"	DATETIME NOT NULL,
	FOREIGN KEY("productUid") REFERENCES "product"("uid"),
	FOREIGN KEY("purchaseOrderUid") REFERENCES "purchaseOrder"("uid")
);
DROP TABLE IF EXISTS "roleAndPermissions";
CREATE TABLE IF NOT EXISTS "roleAndPermissions" (
	"uid"	TEXT NOT NULL,
	"roleUid"	TEXT NOT NULL,
	"permissionsUid"	TEXT NOT NULL,
	"createTime"	DATETIME NOT NULL,
	"updateTime"	DATETIME NOT NULL,
	PRIMARY KEY("uid")
);
COMMIT;
