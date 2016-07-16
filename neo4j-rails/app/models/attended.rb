class Attended
  include Neo4j::ActiveRel

  from_class :User
  to_class   :Course
  type 'attended'

  property :since, type: Time
end
