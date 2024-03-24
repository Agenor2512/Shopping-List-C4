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
    id   int not null auto_increment,
    name varchar(100),
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
values ('2de1feec-a19a-4f16-9226-af782acdab42', 'John Doe', 'johnd@gmail.com', 'shoppinglist'),
       ('2de1feec-a19a-4f16-9226-af782acdab47', 'Sally Dupuis', 'sally@gmail.com', 'shoppinglist');


insert into ingredient (id, name)
values (1, 'Pommes de terre'),
       (2, 'Carottes'),
       (3, 'Oignons'),
       (4, 'Tomates'),
       (5, 'Poivrons'),
       (6, 'Courgettes'),
       (7, 'Aubergines'),
       (8, 'Poireaux'),
       (9, 'Champignons'),
       (10, 'Épinards'),
       (11, 'Haricots verts'),
       (12, 'Petits pois'),
       (13, 'Brocoli'),
       (14, 'Chou-fleur'),
       (15, 'Céleri'),
       (16, 'Navets'),
       (17, 'Radis'),
       (18, 'Concombres'),
       (19, 'Laitue'),
       (20, 'Endives'),
       (21, 'Betteraves'),
       (22, 'Citrons'),
       (23, 'Oranges'),
       (24, 'Pommes'),
       (25, 'Bananes'),
       (26, 'Fraises'),
       (27, 'Framboises'),
       (28, 'Myrtilles'),
       (29, 'Ananas'),
       (30, 'Melon'),
       (31, 'Pastèque'),
       (32, 'Mangue'),
       (33, 'Papaye'),
       (34, 'Kiwi'),
       (35, 'Poires'),
       (36, 'Pêches'),
       (37, 'Cerises'),
       (38, 'Abricots'),
       (39, 'Raisins'),
       (40, 'Noix de coco'),
       (41, 'Noix'),
       (42, 'Amandes'),
       (43, 'Pistaches'),
       (44, 'Cacahuètes'),
       (45, 'Noisettes'),
       (46, 'Graines de tournesol'),
       (47, 'Graines de citrouille'),
       (48, 'Graines de sésame'),
       (49, 'Graines de lin'),
       (50, 'Graines de chia');

insert into list (id, user_id)
values (1, '2de1feec-a19a-4f16-9226-af782acdab42'),
       (2, '2de1feec-a19a-4f16-9226-af782acdab47');

insert into list_has_ingredients (list_id, ingredient_id, quantity)
values (1, 4, '500 grammes'),
       (1, 50, '200 grammes'),
       (2, 36, '1kg'),
       (2, 14, '100 grammes');