SRCS		=	ft_printf.c \
			ft_putchar.c \
			ft_putstr.c \
			ft_putnbr_base.c \

OBJS		=	$(SRCS:.c=.o)

CC			=	gcc

RM			=	rm -f

CFLAGS		= 	-Wall -Wextra -Werror

NAME		= 	libftprintf.a

all:		$(NAME)

$(NAME):	$(OBJS)
	@echo $(HEADER)
	ar rcs $(NAME) $(OBJS)

clean:
	$(RM) $(OBJS) $(BONUS_OBJS)

fclean:		clean
	$(RM) $(NAME)

re:		fclean $(NAME)

.PHONY:		all clean fclean re bonus

