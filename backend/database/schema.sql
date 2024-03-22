create table user
(
    id varchar(36) not null,
    name varchar(100),
    email varchar(320),
    password varchar(100),
    primary key(id)
);

create table ingredient
(
    id int not null auto_increment,
    name varchar(100),
    quantity varchar(20),
    primary key(id)
);

create table list
(
    ingredient_id int not null auto_increment,
    user_id varchar(36) not null,
    primary key(ingredient_id, user_id),
    foreign key(ingredient_id) references ingredient (id),
    foreign key(user_id) references user (id)
);

insert into user (id, name, email, password) values 
("2de1feec-a19a-4f16-9226-af782acdab42", "John Doe", "johnd@gmail.com", "shoppinglist"),
("2de1feec-a19a-4f16-9226-af782acdab47", "Sally Dupuis", "sally@gmail.com", "shoppinglist");

insert into ingredient (name, quantity) values 
('Pommes de terre', '2 kg'),
('Carottes', '500 g'),
('Oignons', '300 g'),
('Tomates', '1 kg'),
('Poivrons', '400 g'),
('Courgettes', '600 g'),
('Aubergines', '700 g'),
('Poireaux', '400 g'),
('Champignons', '300 g'),
('Épinards', '200 g'),
('Haricots verts', '400 g'),
('Petits pois', '250 g'),
('Brocoli', '500 g'),
('Chou-fleur', '600 g'),
('Céleri', '300 g'),
('Navets', '400 g'),
('Radis', '200 g'),
('Concombres', '500 g'),
('Laitue', '300 g'),
('Endives', '400 g'),
('Betteraves', '500 g'),
('Citrons', '1 kg'),
('Oranges', '800 g'),
('Pommes', '1.5 kg'),
('Bananes', '1 kg'),
('Fraises', '500 g'),
('Framboises', '300 g'),
('Myrtilles', '400 g'),
('Ananas', '1.2 kg'),
('Melon', '1 kg'),
('Pastèque', '2 kg'),
('Mangue', '800 g'),
('Papaye', '700 g'),
('Kiwi', '600 g'),
('Poires', '800 g'),
('Pêches', '700 g'),
('Cerises', '500 g'),
('Abricots', '600 g'),
('Raisins', '1 kg'),
('Noix de coco', '500 g'),
('Noix', '400 g'),
('Amandes', '300 g'),
('Pistaches', '200 g'),
('Cacahuètes', '400 g'),
('Noisettes', '300 g'),
('Graines de tournesol', '500 g'),
('Graines de citrouille', '400 g'),
('Graines de sésame', '300 g'),
('Graines de lin', '200 g'),
('Graines de chia', '250 g');
