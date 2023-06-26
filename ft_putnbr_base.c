/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putnbr_base.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lseghier <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/19 18:11:00 by lseghier          #+#    #+#             */
/*   Updated: 2023/06/19 19:39:22 by lseghier         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_printf.h"
#define BASE "0123456789ABCDEF0123456789abcdef"

int	ft_putnbr_base(uintptr_t n, uintptr_t base, int minus)
{
	static int	count;

	count = 0;
	if (n > base -1)
		ft_putnbr_base (n / base, base, minus);
	count = count + ft_putchar(BASE[minus * 16 + n % base]);
	return (count);
}
