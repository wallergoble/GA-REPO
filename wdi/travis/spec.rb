require './calc.rb'
require 'rspec'

RSpec.describe Calc do
    let(:calc) { Calc.new }
    describe "#add" do
        it "adds two numbers together" do
        expect calc.add(1,1).to eq 2
        end
    end
end