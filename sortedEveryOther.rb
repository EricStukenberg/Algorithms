require 'pry'
array = [11, 9, -5, 1, 17, 5, -3, -2, 18, 4, 6, 19, 10, 12, 14, -1, 8, 15, -4, 20]

def sortEveryOther(arr)
    len = arr.length
    if(len == 1 || len == 0)
        return arr
    end 
    res = [] 
    res << arr.max
    res << arr.min
    arr.delete(res[0])
    arr.delete(res[1])
    return  res += sortEveryOther(arr)
end


def shortCutSort(arr) 
    asc = arr.sort
    desc = asc.reverse
    sorted = desc.zip(asc).flatten.uniq
end

begining_time = Time.now
print sortEveryOther(array)
end_time = Time.now
puts "\nTime elapsed  sort1 #{end_time - begining_time}"

array = [11, 9, -5, 1, 17, 5, -3, -2, 18, 4, 6, 19, 10, 12, 14, -1, 8, 15, -4, 20]
begining_time = Time.now
print shortCutSort(array)
end_time = Time.now
puts "\nTime elapsed sort2 #{end_time - begining_time}"