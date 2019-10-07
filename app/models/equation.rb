class Equation < ApplicationRecord
  def fetch_solution
  	fetch_discriminant
  	first_root
  	second_root
  end

  private

  def fetch_discriminant
  	update(discriminant:
  		avarage_cofficent**2 -
  		4 * senior_cofficient *
  		free_cofficent)
  end

  def first_root
  	update(first_root:
  		(-avarage_cofficent + 
  		Math.sqrt(discriminant))/
  		(2 * senior_cofficient))
  end

  def second_root
  	update(second_root:
  	    (-avarage_cofficent - 
  		Math.sqrt(discriminant))/
  		(2 * senior_cofficient))
  end
end
