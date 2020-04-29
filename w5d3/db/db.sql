DROP TABLE residents;
DROP TABLE islands;

CREATE TABLE islands(
   id serial PRIMARY KEY,
   name TEXT NOT NULL,
   location TEXT NOT NULL,
   size TEXT NOT NULL,
   turnip_price INT NOT NULL
);

CREATE TABLE residents(
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    has_vehicle BOOLEAN NOT NULL,
    island_id int REFERENCES islands(id)
);

INSERT INTO islands (name, location, size, turnip_price) VALUES ('Raftel', 'North Hemisphere', 'Big', 139); 
INSERT INTO islands (name, location, size, turnip_price) VALUES ('Montoya', 'North Hemisphere', 'Medium', 339); 
INSERT INTO islands (name, location, size, turnip_price) VALUES ('Malos', 'North Hemisphere', 'Small', 300); 
INSERT INTO islands (name, location, size, turnip_price) VALUES ('Heart Beet', 'South Hemisphere', 'Big', 39); 
INSERT INTO islands (name, location, size, turnip_price) VALUES ('Endurance', 'South Hemisphere', 'Big', 100); 


INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ('Cadaei','1986-06-09',false,1);
INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ('Humperdink','1989-05-09',true,2);
INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ('Riki','1985-02-01',true,2);
INSERT INTO residents (name, birthday, has_vehicle, island_id) VALUES ('Franny','1992-07-07',false,4);