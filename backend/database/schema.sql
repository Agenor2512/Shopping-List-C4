create table user
(
    id       varchar(36) not null,
    name     varchar(100),
    email    varchar(320),
    password varchar(100),
    primary key (id)
);

create table ingredient
(
    id   int          not null auto_increment,
    name varchar(100) not null,
    primary key (id)
);

create table list
(
    id      int         not null auto_increment,
    user_id varchar(36) not null,
    primary key (id),
    foreign key (user_id) references user (id)
);

create table list_has_ingredients
(
    list_id       int not null,
    ingredient_id int not null,
    quantity      varchar(100),
    primary key (list_id, ingredient_id),
    foreign key (list_id) references list (id),
    foreign key (ingredient_id) references ingredient (id)
);

insert into user (id, name, email, password)
values ('2de1feec-a19a-4f16-9226-af782acdab42', 'John Doe', 'johnd@gmail.com',
        '$argon2i$v=19$m=16,t=2,p=2$R2lNQXZPUnYyaVBiWkppaw$SgRBxn70r/TPIcLpB6pScA'),
       ('2de1feec-a19a-4f16-9226-af782acdab47', 'Sally Dupuis', 'sally@gmail.com',
        '$argon2i$v=19$m=16,t=2,p=2$R2lNQXZPUnYyaVBiWkppaw$SgRBxn70r/TPIcLpB6pScA');


insert into ingredient (id, name)
values (1, 'Potatoes'),
       (2, 'Carrots'),
       (3, 'Onions'),
       (4, 'Tomatoes'),
       (5, 'Peppers'),
       (6, 'Courgettes'),
       (7, 'Aubergines'),
       (8, 'Leeks'),
       (9, 'Mushrooms'),
       (10, 'Spinach'),
       (11, 'Green beans'),
       (12, 'Peas'),
       (13, 'Broccoli'),
       (14, 'Cauliflower'),
       (15, 'Celery'),
       (16, 'Turnips'),
       (17, 'Radishes'),
       (18, 'Cucumbers'),
       (19, 'Lettuce'),
       (20, 'Endives'),
       (21, 'Beets'),
       (22, 'Lemons'),
       (23, 'Oranges'),
       (24, 'Apples'),
       (25, 'Bananas'),
       (26, 'Strawberries'),
       (27, 'Raspberries'),
       (28, 'Blueberries'),
       (29, 'Pineapple'),
       (30, 'Melon'),
       (31, 'Watermelon'),
       (32, 'Mango'),
       (33, 'Papaya'),
       (34, 'Kiwi'),
       (35, 'Pears'),
       (36, 'Peaches'),
       (37, 'Cherries'),
       (38, 'Apricots'),
       (39, 'Grapes'),
       (40, 'Coconut'),
       (41, 'Walnuts'),
       (42, 'Almonds'),
       (43, 'Pistachios'),
       (44, 'Peanuts'),
       (45, 'Hazelnuts'),
       (46, 'Sunflower seeds'),
       (47, 'Pumpkin seeds'),
       (48, 'Sesame seeds'),
       (49, 'Flax seeds'),
       (50, 'Chia seeds');

insert into list (id, user_id)
values (1, '2de1feec-a19a-4f16-9226-af782acdab42'),
       (2, '2de1feec-a19a-4f16-9226-af782acdab47');

insert into list_has_ingredients (list_id, ingredient_id, quantity)
values (1, 4, '500 grams'),
       (1, 50, '200 grams'),
       (2, 36, '1kg'),
       (2, 14, '100 grams');