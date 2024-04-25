import type { IChineseDate } from "date-chinese";
import type { FormEvent, ReactElement } from "react";

import { Button, Group, Menu, NumberInput, Table, Title } from "@mantine/core";
import { CalendarChinese } from "date-chinese";
import { useMemo, useRef, useState } from "react";

import { useI18n } from "../../hooks/useI18n";

import styles from "./styles.module.css";

const cal = new CalendarChinese();

const now = new Date().getFullYear();

export default function Events(): ReactElement {
  const { formatDate, translate } = useI18n();
  const inputRef = useRef<HTMLInputElement>(null);
  const [year, setYear] = useState(now);

  const [chineseYear, newYear] = useMemo(() => {
    const newYear = cal.newYear(year);
    cal.fromJDE(newYear);
    return [cal.get(), cal.toGregorian()];
  }, [year]);
  const lanternFestival = useMemo(() => {
    const cDate = chineseYear.slice() as IChineseDate;
    cDate[2] = 1;
    cDate[4] = 15;
    cal.set(cDate);
    return cal.toGregorian();
  }, [chineseYear]);
  const dragonBoatFestival = useMemo(() => {
    const cDate = chineseYear.slice() as IChineseDate;
    cDate[2] = 5;
    cDate[4] = 5;
    cal.set(cDate);
    return cal.toGregorian();
  }, [chineseYear]);
  const qixiFestival = useMemo(() => {
    const cDate = chineseYear.slice() as IChineseDate;
    cDate[2] = 7;
    cDate[4] = 7;
    cal.set(cDate);
    return cal.toGregorian();
  }, [chineseYear]);
  const midAutumnFestival = useMemo(() => {
    const cDate = chineseYear.slice() as IChineseDate;
    cDate[2] = 8;
    cDate[4] = 15;
    cal.set(cDate);
    return cal.toGregorian();
  }, [chineseYear]);
  const chongyangFestival = useMemo(() => {
    const cDate = chineseYear.slice() as IChineseDate;
    cDate[2] = 9;
    cDate[4] = 9;
    cal.set(cDate);
    return cal.toGregorian();
  }, [chineseYear]);

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setYear(Number(inputRef.current?.value));
  }

  return (
    <>
      <Group justify="space-between">
        <Title order={2} size="h4">
          {year === now
            ? translate("This year events")
            : translate(`$year events`, { year })}
        </Title>
        <Menu>
          <Menu.Target>
            <Button size="xs">{translate("Change")}</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <form onSubmit={handleSubmit}>
              <Group gap={4}>
                <NumberInput
                  ref={inputRef}
                  className={styles.input}
                  defaultValue={2024}
                  size="xs"
                />
                <Button size="xs" type="submit">
                  {translate("Update")}
                </Button>
              </Group>
            </form>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <Table className={styles.table}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{translate("Events")}</Table.Th>
            <Table.Th>{translate("Date")}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>{translate("Chinese New Year")}</Table.Td>
            <Table.Td>{formatDate(newYear)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>{translate("Lantern Festival")}</Table.Td>
            <Table.Td>{formatDate(lanternFestival)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>{translate("DragonBoat Festival")}</Table.Td>
            <Table.Td>{formatDate(dragonBoatFestival)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>{translate("Qixi")}</Table.Td>
            <Table.Td>{formatDate(qixiFestival)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>{translate("Mid Autumn Festival")}</Table.Td>
            <Table.Td>{formatDate(midAutumnFestival)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>{translate("Double Ninth Festival")}</Table.Td>
            <Table.Td>{formatDate(chongyangFestival)}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
}
