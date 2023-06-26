/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_printf.h                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lseghier <lseghier@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/06/19 20:26:33 by lseghier          #+#    #+#             */
/*   Updated: 2023/06/19 23:12:28 by lseghier         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef FT_PRINTF_H
# define FT_PRINTF_H

# include	<stdio.h>
# include	<stdarg.h>
# include	<stddef.h>
# include	<stdint.h>
# include	<string.h>
# include	<stdlib.h>
# include	<stdbool.h>
# include	<unistd.h>

int		ft_printf(const char *str, ...);
int		ft_putnbr_base(uintptr_t n, uintptr_t base, int minus);
int		ft_choic(intptr_t n);
int		ft_choice(va_list *var, const char c);
int		ft_putstr(char *str);
int		ft_putchar(char c);

#endif
