import { supabase } from './supabaseClient.js'

const form = document.getElementById('loginForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert('Erro no login: ' + error.message)
  } else {
    window.location.href = "dashboard.html"
  }
})
