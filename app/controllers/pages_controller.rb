class PagesController < ApplicationController
  def home
    @projects = Project.all
  end

  def hello
  end

  def about
  end
end
