class EnrolledIn
  include Neo4j::ActiveRel

  from_class :User
  to_class   :StudentGroup
  type 'enrolled_in'

  property :grade, type: Integer
end
