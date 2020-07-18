
#returns a hash of letter counts
#hash = {"a" => 1, "b" => 3, "e" => 6}
def countLetters(str)
    visited = {} 
    i = 0
    while(str[i] != nil)
        if(str[i].match(/[A-Za-z]/))
            if(visited[str[i]]) 
                visited[str[i]] += 1 
            else 
                visited[str[i]] = 1
            end
        end
        i +=1
    end
    visited
end

str1 = "the quick brown fox jumps over the lazy dog"
str2 = "the quick brown fox jumps over the dog"
hash = isParagram(str1)
puts 
puts hash.size
hash = isParagram(str2)
puts hash.size