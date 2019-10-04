class CreateEquations < ActiveRecord::Migration[5.2]
  def change
    create_table :equations do |t|
      t.float :senior_cofficient, null: false
      t.float :avarage_cofficent, null: false
      t.float :free_cofficent, null: false
      t.float :discriminant
      t.float :first_root
      t.float :second_root
      t.timestamps
    end
  end
end
