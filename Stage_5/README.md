# Expect the unexpected
<div class="step-text">
<h3 id="description">Description</h3>
<p>We made our program run continuously, but there is a problem, as you cannot handle any unexpected inputs! The visitor could enter a different number than you provide, or they could enter a character instead of a number. Now, we will handle these cases. </p>
<p>For the initial input, where you ask the visitors what to do, if the visitor enters anything unexpected, output <code class="java">Please enter a valid number!</code></p>
<p>For the <strong>first</strong> option, where the visitor chooses to buy a gift, handle these cases;</p>
<ul>
<li>
<p>If there're no gifts left to buy, output: <code class="java">Wow! There are no gifts to buy.</code></p>
</li>
<li>
<p>If there are non-numeric characters in the input: <code class="java">Please enter a valid number!</code></p>
</li>
<li>
<p>If there are no gifts with that number. Output this message: <code class="java">There is no gift with that number!</code></p>
</li>
<li>
<p>If the visitor doesn’t have enough tickets to buy a gift: <code class="java">You don't have enough tickets to buy this gift.</code></p>
</li>
</ul>
<p>For the <strong>second</strong> option, where the visitor enters the number of tickets they want to add, handle these cases:</p>
<ul>
<li>if they enter a non-numeric value.</li>
<li>the number they enter should be between <code class="java">0</code> and <code class="java">1000</code> (both inclusive).</li>
</ul>
<p>Output this message if <strong>any</strong> of these cases happen: <code class="java">Please enter a valid number between 0 and 1000.</code></p>
<p>For the <strong>last</strong> option, where you show the list of gifts, if there are no gifts left to offer, output this message again:<code class="java">Wow! There are no gifts to buy.</code></p>
<p>Following the previous stage, the program will run until the exit prompt is entered.</p>
<p>You can use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" rel="noopener noreferrer nofollow" target="_blank">isNaN</a> built-in method to check if an input is a number.</p>
<h3 id="objectives">Objectives</h3>
<p>In this stage, your program should:</p>
<ol>
<li>Print the welcoming and greeting messages from the previous stage;</li>
<li>Print the list of gifts;</li>
<li>Handle the initial input where the user chooses what to do and handle any unexpected inputs;</li>
<li>Handle the option to buy a gift and handle all of the cases mentioned above;</li>
<li>Handle the option to add more tickets to the total tickets and handle all of the cases mentioned above;</li>
<li>Handle the option to see the total tickets;</li>
<li>Handle the option to see the list of gifts and handle all of the cases mentioned above; </li>
<li>Handle the option to quit the program;</li>
<li>Run continuously;</li>
<li>Terminate the program the message.</li>
</ol>
<h3 id="examples">Examples</h3>
<p>The greater-than symbol followed by a space (<code class="java">&gt; </code>) represents the user input. Note that it's not part of the input.</p>
<p><strong>Example 1: </strong><em>where the program handles an unexpected input at the initial stage</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 6
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0

</code></pre>
<p><strong>Example 2: </strong><em>where the program takes a random input at the first option</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 2
Enter the ticket amount: &gt; 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 1
Enter the number of the gift you want to get: &gt; a
Please enter a valid number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0

</code></pre>
<p><strong>Example 3: </strong><em>where the program addresses if the user enters the wrong id at the first option</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 2
Enter the ticket amount: &gt; 100
Total tickets: 100

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 1
Enter the number of the gift you want to get: &gt; 0
There is no gift with that number!

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0

</code></pre>
<p><strong>Example 4: </strong><em>where the program addresses if the user has insufficient tickets at the first option</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 1
Enter the number of the gift you want to get: &gt; 1
You don't have enough tickets to buy this gift.
Total tickets: 0

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0

</code></pre>
<p> <strong>Example 5: </strong><em>where the program addresses if there are no gifts left at the first option</em></p>
<pre><code class="language-no-highlight">...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 1
Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt;

</code></pre>
<p> <strong>Example 6: </strong><em>where the program takes an unexpected input at the second option</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 2
Enter the ticket amount: &gt; a
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0
</code></pre>
<p> <strong>Example 7: </strong><em>where the program takes unexpected information at the second option</em></p>
<pre><code class="language-no-highlight">WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 2
Enter the ticket amount: &gt; 1001
Please enter a valid number between 0 and 1000.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0

</code></pre>
<p><strong>Example 8: </strong><em>where the program addresses if there are no gifts left at the fourth option</em></p>
<pre><code class="language-no-highlight">...
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 4
Here's the list of gifts:

Wow! There are no gifts to buy.

What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
&gt; 5
Have a nice day!

Process finished with exit code 0


</code></pre>
</div>
