class Equation < ApplicationRecord
  def fetch_solution
  	fetch_discriminant
  	fetch_first_root
  	fetch_second_root
    Equation.last
  end

  private

  def fetch_discriminant
  	update(discriminant:
  		avarage_cofficent**2 -
  		4 * senior_cofficient *
  		free_cofficent)
  end

  def fetch_first_root
  	update(first_root:
  		(-avarage_cofficent + 
  		Math.sqrt(discriminant))/
  		(2 * senior_cofficient))
  end

  def fetch_second_root
  	update(second_root:
  	    (-avarage_cofficent - 
  		Math.sqrt(discriminant))/
  		(2 * senior_cofficient))
  end
end


# Equation.create(senior_cofficient: '1', avarage_cofficent: '-2', free_cofficent: '-3')