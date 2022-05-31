export const SQL_CUSTOMERS_CREATE = {
    CREATE:'INSERT INTO customers(identification,name ,lastname, address,phonenumber) \
    VALUES($1, $2, $3, $4, $5) \
    RETURNING id_customer',
    CONFIRM:'SELECT COUNT(pr.id_customer) AS amount \
    FROM customers pr \
    WHERE (pr.identification) = lower($1);',

}