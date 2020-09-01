
/*the form again."; } else{ $from="From: $name<$email>\r\nReturn-path: $email"; $subject="Message sent using your contact form"; mail("youremail@yoursite.com", $subject, $message, $from); echo "Email sent!"; } } ?>
*/

document.querySelector('.menu_left').innerHTML = `
    <ul class="menu_left" id="menu">
        <li class="icon"><a href="#home"><img src="img/home-run.png"></a>
            <div class="navText">home</div>
        </li>
        <li class="icon"><a href="#about"><img src="img/person.png"></a>
            <div class="navText">about</div>
        </li>
        <li class="icon"><a href="#pieces"><img src="img/work.png"></a>
            <div class="navText">work</div>
        </li>
        <li class="icon"><a href="#reach"><img src="img/contact.png"></a>
            <div class="navText">contact</div>
        </li>
    </ul>
`