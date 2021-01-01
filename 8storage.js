> localStorage
     # Presistent Storage
     # We have to manully remove
     # save wrt to browser

    
localStorage.setItem('_token____','433462436')
undefined
localStorage.getItem('_token____')
"433462436"
localStorage.removeItem('_token____')
undefined
localStorage.getItem('_token____')
null

> sessionStorage
     # Non Presistent Storage
     # remove as soon as you close tab / remove manully
     # save wrt to tab

sessionStorage.setItem('mykey','433462436')
     undefined
sessionStorage.getItem('mykey')
     "433462436"
sessionStorage.removeItem('mykey')

> cookies
# Save wrt to website 
# expire in time


document.cookie

document.cookie="type=resume"
"type=resume"
document.cookie
"_ga=GA1.2.1880173027.1602255983; origin=delhi; _gid=GA1.2.571209092.1609514774; _gat_gtag_UA_131256843_1=1; type=resume"

document.cookie="mydata=test; expires=Sat, 02 Jan 2021 01:00:00 UTC;"