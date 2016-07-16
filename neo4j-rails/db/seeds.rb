# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.destroy_all
Course.destroy_all
StudentGroup.destroy_all

100.times do |i|
  User.create(name: "butcher#{i}", email: "butcher#{i}@example.com")
end

10.times do |i|
  Course.create(name: "course#{i}")
end

10.times do |i|
  StudentGroup.create(name: "group#{i}")
end

User.all.each do |user|
  [*1..10].sample([*1..5].sample).each do |n|
    course = Course.where(name: "course#{n}").first
    Attended.create(from_node: user, to_node: course, since: Time.zone.now) if user && course
  end

  [*1..10].sample([*1..2].sample).each do |n|
    group = StudentGroup.where(name: "group#{n}").first
    EnrolledIn.create(from_node: user, to_node: group, grade: [*1..3].sample) if user && group
  end
end


