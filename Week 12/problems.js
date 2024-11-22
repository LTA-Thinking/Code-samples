/*
 * We will do Euler problems for part of class. These can be found here: https://projecteuler.net/archives
 * Assignment: Do Euler Problem #1, Multiples of 3 or 5. You do not have to make an account, but you can if you want to see if your answer is correct.
 */

function problem2()
{
    var max = 4000000;
    var first = 1;
    var second = 2;
    var sum = 2;

    while (second < max)
    {
        var next = first + second;
        first = second;
        second = next;
        if (next < max && next % 2 === 0)
        {
            sum += next;
        }
    }
    
    displayAnswer(2, sum);
}

function problem3()
{
    var number = 600851475143;
    var current = 2;

    while (current < number)
    {
        if (number % current === 0)
        {
            number = number / current;
        }
        else
        {
            current++;
        }
    }

    displayAnswer(3, number);
}

problem2();
problem3();