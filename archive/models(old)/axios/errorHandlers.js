// Цель обработчиков – преобразование ответов сервера в сообщения, которые можно будет сразу показывать пользвателю

export function handlerError400(data) {
  if (
    data.password1 &&
    data.password1.indexOf(
      'This password is too short. It must contain at least 8 characters.'
    ) + 1
  )
    return 'Слишком короткий пароль'
  if (
    data.password1 &&
    data.password1.indexOf('This password is too common.') + 1
  )
    return 'Слишком распространенный пароль'
  else if (
    data.email &&
    data.email.indexOf(
      'A user is already registered with this e-mail address.'
    ) + 1
  )
    return 'Такой email уже существует'
  else if (data.email && data.email.indexOf('Enter a valid email address.') + 1)
    return 'Некорректный email'
  else
    return {
      msg: 'Необработанная 400 ошибка',
      data: data
    }
}

export function handlerError401(data) {
  if (data.detail && data.detail === 'Invalid token.')
    return 'Неверный Bearer Token'
  else if (
    data.detail &&
    data.detail === 'Authentication credentials were not provided.'
  )
    return 'web-токен не был предоставлен'
  else if (
    data.password1 &&
    data.password1.indexOf('This password is too common.') + 1
  )
    return 'Слишком распространенный пароль'
  else if (
    data.email &&
    data.email.indexOf(
      'A user is already registered with this e-mail address.'
    ) + 1
  )
    return 'Такой email уже существует'
}
