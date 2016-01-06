CREATE TABLE CATEGORY (
    NAME VARCHAR(100) NOT NULL
);

ALTER TABLE CATEGORY
    ADD PRIMARY KEY (
            NAME
);


CREATE TABLE MENU (
    ID          INT NOT NULL AUTO_INCREMENT,
    NAME          VARCHAR(100) NOT NULL COMMENT '메뉴명',
    PRICE         INT          NOT NULL COMMENT '가격',
    COST          INT          NOT NULL COMMENT '원가',
    TAX_MODE      TINYINT(1)   NOT NULL COMMENT '세금/면세 상품 여부',
    BARCODE       VARCHAR(150) NULL     COMMENT '바코드',
    CATEGORY_NAME VARCHAR(100) NULL     COMMENT 'CATEGORY PK',
    PRIMARY KEY(ID)
);


CREATE TABLE USER (
    USERNAME          VARCHAR(100) NOT NULL,
    PASSWORD      VARCHAR(100) NOT NULL,
    STORE_NAME      VARCHAR(100) NOT NULL,
    STORE_ADDRESS      VARCHAR(100) NOT NULL,
    CREATE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE USER
    ADD
        PRIMARY KEY (
            USERNAME
);

CREATE TABLE PURCHASE (
    ID          INT NOT NULL AUTO_INCREMENT,
    NAME          VARCHAR(100) NOT NULL COMMENT '메뉴명',
    BARCODE       VARCHAR(150) NULL     COMMENT '바코드',
    QUANTITY      INT          NOT NULL COMMENT '수량',
    TOTAL_PRICE      INT          NOT NULL ,
    PURCHASE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID)
);


ALTER TABLE MENU
    ADD
        FOREIGN KEY (
            CATEGORY_NAME
        )
        REFERENCES CATEGORY (
            NAME
        );


