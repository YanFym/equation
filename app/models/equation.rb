class Equation < ApplicationRecord
  def fetch_solution
    if senior_cofficient == 0
      simple_equation
    else
  	  fetch_discriminant
      if discriminant >= 0
        fetch_first_root
    	  fetch_second_root
      end
    end
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

  def simple_equation
    update(first_root:
      (-free_cofficent)/
      avarage_cofficent
      )
  end
end


# Equation.create(senior_cofficient: '1', avarage_cofficent: '-2', free_cofficent: '-3')