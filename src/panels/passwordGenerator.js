import React, { useState } from 'react'
import { Panel, PanelHeader, Header, Group, SimpleCell, Input } from "@vkontakte/vkui";

const PasswordGenerator = () => {
    const [ length, setLength ] = useState(5);
    const [ password, setPassword ] = useState("");

    const generatePassword = (length) => {
        const chars = "abcdifgABCDIFG1234567890";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    };
    
    const handleGeneratePassword = () => {
        const newPassword = generatePassword(length);
        setPassword(newPassword);
    }
    const copyPassword = () => {
        
    }

    return (
    <Panel id="home">
        <PanelHeader>Генератор паролей</PanelHeader>
        <Group header={<Header mode="secondary">Настройки</Header>}>
        <SimpleCell
            description="Length"
            after={
                <Input 
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            }
        >
            Кол-во символов
            </SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Генерация</Header>}>
            <SimpleCell onClick={handleGeneratePassword}>Сгенерировать</SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Ваш пароль</Header>}>
            <SimpleCell onClick={copyPassword}>{password || "Пароль еще не сгенерирован"}</SimpleCell>
        </Group>
    </Panel>
    );
}

export default PasswordGenerator