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

get '/tickets10' do
  erb :tickets10
end

get '/tickets15' do
  erb :tickets15
end

get '/tickets20' do
  erb :tickets20
end

get '/tickets25' do
  erb :tickets25
end

get '/soldout' do
  erb :soldout
end

get '/tshirts' do
  erb :tshirt_sale_done
end

get '/tshirts/' do
  erb :tshirt_sale_done
end
