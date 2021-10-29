# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create!(username: "demo", email: "demo@gmail.com", dob: "1999-09-09", password: "demopassword")
u2 = User.create!(username: "mansoo", email: "mansoo@gmail.com", dob: "1993-06-09", password: "minnie")
u3 = User.create!(username: "emmay", email: "emmay@gmail.com", dob: "1998-01-01", password: "turtle")
u4 = User.create!(username: "wood", email: "vic@gmail.com", dob: "1997-02-02", password: "shiroo")
u5 = User.create!(username: "stelluhhh", email: "stella@gmail.com", dob: "1997-03-03", password: "dabiii")

s1 = Server.create!(name: "True Study Buddies Come to FL", owner_id: u2.id)
s2 = Server.create!(name: "One Brain One Cohort", owner_id: u4.id)

c11 = Channel.create!(name: "general", server_id: s1.id)
c12 = Channel.create!(name: "code", server_id: s1.id)
c13 = Channel.create!(name: "memes", server_id: s1.id)

c21 = Channel.create!(name: "general", server_id: s2.id)
c22 = Channel.create!(name: "homework-help", server_id: s2.id)
c23 = Channel.create!(name: "resources", server_id: s2.id)
