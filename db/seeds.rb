# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(username: "demo", email: "demo@gmail.com", dob: "1999-09-09", password: "demopassword")
u2 = User.create!(username: "mansoo", email: "mansoo@gmail.com", dob: "1993-06-09", password: "minnie")
