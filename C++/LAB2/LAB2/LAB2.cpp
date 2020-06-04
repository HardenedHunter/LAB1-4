// ReSharper disable CommentTypo
// ReSharper disable StringLiteralTypo

// 2. Список абонентов кабельной сети состоит из структур с полями : фамилия, район,
// адрес, телефон, номер договора, дата заключения договора, оплата установки,
// абонентская плата помесячно, дата последнего платежа.Поиск по фамилии,
// району, дате заключения договора, дате последнего платежа.
//
// 3. Реализовать справочник абонентов кабельной сети.

#include <clocale>
#include "render_utils.h"

using namespace render_utils;

int main()
{
	setlocale(LC_ALL, "Russian");
	render();
}
