import { ActivityType, Events } from 'discord.js';
import { GuildUpdater } from '../../structures/updater/Guilds.js';
import type { Event } from '../../structures/types/Event.js';

export const guildUpdater = new GuildUpdater();
export default {
    name: Events.ClientReady,
    async execute(client) {
        console.log(`${client.user.username} is online!`.green.bold);
        client.user.setActivity({
            name: 'HEAVY DEVELOPMENT ONGOING',
            type: ActivityType.Watching
        });
        await guildUpdater.updateGuilds();
    }
} as Event<Events.ClientReady>;