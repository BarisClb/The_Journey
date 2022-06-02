// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?



// My Answer


let greet = () => "hello world!";


// Best Answers


function greet() {

    /*
    quu..__
     $$$b  `---.__
      "$$b        `--.                          ___.---uuudP
       `$$b           `.__.------.__     __.---'      $$$$"              .
         "$b          -'            `-.-'            $$$"              .'|
           ".                                       d$"             _.'  |
             `.   /                              ..."             .'     |
               `./                           ..::-'            _.'       |
                /                         .:::-'            .-'         .'
               :                          ::''\          _.'            |
              .' .-.             .-.           `.      .'               |
              : /'$$|           .@"$\           `.   .'              _.-'
             .'|$u$$|          |$$,$$|           |  <            _.-'
             | `:$$:'          :$$$$$:           `.  `.       .-'
             :                  `"--'             |    `-.     \
            :##.       ==             .###.       `.      `.    `\
            |##:                      :###:        |        >     >
       */return "hello world!";/*     |#'     `..'`..'          `###'        x:      /     /
             \                                   xXX|     /    ./
              \                                xXXX'|    /   ./
              /`-.                                  `.  /   /
             :    `-  ...........,                   | /  .'
             |         ``:::::::'       .            |<    `.
             |             ```          |           x| \ `.:``.
             |                         .'    /'   xXX|  `:`M`M':.
             |    |                    ;    /:' xXXX'|  -'MMMMM:'
             `.  .'                   :    /:'       |-'MMMM.-'
              |  |                   .'   /'        .'MMM.-'
              `'`'                   :  ,'          |MMM<
                |                     `'            |tbap\
                 \                                  :MM.-'
                  \                 |              .''
                   \.               `.            /
                    /     .:::::::.. :           /
                   |     .:::::::::::`.         /
                   |   .:::------------\       /
                  /   .''               >::'  /
                  `',:                 :    .'
                                        
    */
      
    
    
    }

    

(function () { 
    var prev = 22915696;
    var modulus = Math.pow(2,32);
    var multiplier = 1664525;
    var increment = 1013904223;
    
    function setRandSeed(s) {
        prev = s;
    }
    function random() {
        prev = (multiplier * prev + increment) % modulus;  
        return prev/Math.pow(2,32);
    }
    Math.random = random;
    Math.setRandSeed = setRandSeed;
    })();
    
    function generateChar() {
    return String.fromCharCode(Math.floor(Math.random() * (91-65)) + 65);
    }
    
    function generateWord(length)
    {
    var res = "";
    for(var i = 0; i < length; i++)
        res += generateChar();
    return res.toLowerCase();
    }
    
    function greet() {
    var greetings = generateWord(5);
    Math.setRandSeed(18337180); 
    var someone = generateWord(5);
    
    return greetings + " " + someone + "!";
    }



    function greet(){
        var a=0
        var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var hello = [];
        var world = [];
                        a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;
    hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;
    hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;
    hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
    hello.push(abc[a]); a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
    hello.push(abc[a]);
    
                
                        a++;          a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
    world.push(abc[a]);  a--;        a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
    world.push(abc[a]);   a++;      a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
    world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
    world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
    world.push(abc[a]);
    
    return hello.join("") + " " + world.join("")+"!";
}

