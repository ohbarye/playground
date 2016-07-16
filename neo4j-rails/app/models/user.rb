class User 
  include Neo4j::ActiveNode

  property :name, type: String
  property :email, type: String

  has_many :out, :student_groups, rel_class: :EnrolledIn
end
