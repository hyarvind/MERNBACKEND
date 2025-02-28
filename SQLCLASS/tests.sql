create table under(
    id int primary key,
    username varchar(20),
    email varchar(20)  unique DEFAULT 0,
    password varchar(20)
);
