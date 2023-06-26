/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lseghier <lseghier@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/19 18:29:20 by lseghier          #+#    #+#             */
/*   Updated: 2023/06/19 23:18:13 by lseghier         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_printf.h"

int	ft_choic(intptr_t n)
{
	int	i;

	i = 0;
	if (n == -2147483648)
		return (ft_putstr("-2147483648"));
	else if (n < 0)
	{
		write (1, "-", 1);
		n *= -1;
		i = 1;
	}
	return (ft_putnbr_base(n, 10, 0) + i);
}

int	ft_choice(va_list *var, const char c)
{
	void	*p;

	if (c == 'c')
		return (ft_putchar(va_arg(*var, int)));
	else if (c == 's')
		return (ft_putstr(va_arg(*var, char *)));
	else if (c == '%')
		return (ft_putchar('%'));
	else if ((c == 'X') || (c == 'x'))
		return (ft_putnbr_base(va_arg(*var, unsigned int), 16, 'x' == c));
	else if ((c == 'd' || c == 'i'))
		return (ft_choic(va_arg(*var, int)));
	else if (c == 'u')
		return (ft_putnbr_base(va_arg(*var, unsigned int), 10, 0));
	else if (c == 'p')
	{
		p = (va_arg(*var, void *));
		if (p == 0)
			return (ft_putstr("(nil)"));
		return (ft_putstr("0x") + ft_putnbr_base((uintptr_t)p, 16, 1));
	}
	return (0);
}

int	ft_printf(const char *str, ...)
{
	int		i;
	int		count;
	va_list	var;

	i = 0;
	count = 0;
	va_start(var, str);
	if (str == NULL)
		return (-1);
	while (str && str[i])
	{
		if (str[i] == '%')
		{
			i++;
			count += ft_choice(&var, str[i++]);
		}
		else
			count += ft_putchar(str[i++]);
	}
	va_end(var);
	return (count);
}
