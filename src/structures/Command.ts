import type { CommandInteraction, RESTPostAPIApplicationCommandsJSONBody, RESTPostAPIApplicationGuildCommandsJSONBody } from 'discord.js';
import { CustomOptions } from "./Interfaces.js"

/**
 * Defines the structure of a command.
 */
export type Command = {
    name: CustomOptions["name"];
    description: CustomOptions["description"];
    owner?: CustomOptions["owner"];
    customPermissions?: CustomOptions["customPermissions"];
    /**
     * The data for the command
     */
    data: RESTPostAPIApplicationCommandsJSONBody | RESTPostAPIApplicationGuildCommandsJSONBody;
    /**
     * The custom options for the command
     */
    opt?: CustomOptions;
    /**
     * The function to execute when the command is called
     *
     * @param interaction - The interaction of the command
     */
    execute(interaction: CommandInteraction): Promise<void> | void;
};