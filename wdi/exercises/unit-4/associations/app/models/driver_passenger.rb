class DriverPassenger < ApplicationRecord
  belongs_to :driver
  belongs_to :passenger
end
