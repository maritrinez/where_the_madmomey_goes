

excluded = [
    ["es_auto","28052"],
    ["es_contents","28052"],
    ["es_contents","28055"],
    ["es_home","28052"],
    ["es_hotelservices","28040"],
    ["es_hotelservices","28048"],
    ["es_hotelservices","28051"],
    ["es_hotelservices","28052"],
    ["es_hotelservices","28054"],
    ["es_hotelservices","28055"],
    ["es_hyper","28052"],
    ["es_leisure","28048"],
    ["es_leisure","28052"],
    ["es_otherservices","28052"],
    ["es_sportsandtoys","28052"],
    ["es_tech","28052"],
    ["es_tech","28055"],
    ["es_travel","28048"],
    ["es_travel","28051"],
    ["es_travel","28052"],
    ["es_travel","28055"],
    ["es_wellnessandbeauty","28052"]
]

i = 0
%W{
  all
  es_auto
  es_barsandrestaurants
  es_contents
  es_fashion
  es_food
  es_home
  es_hotelservices
  es_hyper
  es_leisure
  es_otherservices
  es_sportsandtoys
  es_tech
  es_travel
  es_wellnessandbeauty
}.each do |category|
  28001.upto(28055) do |cp|
    name = "map_#{cp}_#{category}.png"
    if !File.file?(name) && !excluded.include?([category, cp.to_s])
      puts name 
      i+=1
    end
  end
end

i = 0
%W{
  all
  es_auto
  es_barsandrestaurants
  es_contents
  es_fashion
  es_food
  es_home
  es_hotelservices
  es_hyper
  es_leisure
  es_otherservices
  es_sportsandtoys
  es_tech
  es_travel
  es_wellnessandbeauty
}.each do |category|
  28001.upto(28055) do |cp|
    name = "map_#{cp}_#{category}.png"
    unless File.file?(name)
      puts name 
      i+=1
    end
  end
end


puts "total: #{i}"
