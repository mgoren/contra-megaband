require 'sinatra'

get '/' do
  erb :index
end

get '/tickets' do
  erb :tickets
end

get '/tickets/' do
  erb :tickets
end

get '/soldout' do
  erb :soldout
end

get '/tshirts' do
  erb :tshirts
end

get '/tshirts/' do
  erb :tshirts
end

get '/test' do
  erb :test
end
