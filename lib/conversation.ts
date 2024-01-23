import { db } from "./db";

export const getOrCreateConversation = async (memberOneId: string, memberTwoId: string) => {
    const conversation = await findConversation(memberOneId, memberTwoId);

    if (!conversation) {
        return await createNewConversation(memberOneId, memberTwoId);
    }

    return conversation;
};

const findConversation = async (memberOneId: string, memberTwoId: string) => {
    //TODO Comprobar cambio de esta query
    try {
        return await db.conversation.findFirst({
            where: {
                OR: [
                    {
                        AND: [
                            { memberOneId: memberOneId },
                            { memberTwoId: memberTwoId },
                        ],
                    },
                    {
                        AND: [
                            { memberOneId: memberTwoId },
                            { memberTwoId: memberOneId },
                        ],
                    },
                ],
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    },
                },
                memberTwo: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
    } catch {
        return null;
    }
};

const createNewConversation = async (memberOneId: string, memberTwoId: string) => {
    try {
        return await db.conversation.create({
            data: {
                memberOneId,
                memberTwoId,
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    },
                },
                memberTwo: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
    } catch {
        return null;
    }
};
