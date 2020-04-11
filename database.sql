-- use database: react_gallery

-- create table
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	description varchar(500) not null,
	path varchar(300) not null,
    likes integer,
    is_clicked boolean
);

-- insert data
INSERT INTO "gallery" ("description", "path", "likes", "is_clicked")
VALUES ('Photo of a goat taken at Glacier National Park.','images/goat_small.jpg',0,false),
 ('Photo of a grumpy cat.','images/cat.jpg',0,false),
 ('Photo of a cute dog.','images/dog.jpg', 0,false);