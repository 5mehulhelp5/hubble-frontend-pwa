import { ref, Ref } from 'vue'
import { IUseNotification, NotificationOptions, Notification } from '@hubblecommerce/hubble/commons'

const notifications: Ref<Notification[]> = ref([])
let notificationDefaultDisplayTime = 5
let notificationsDefaultKeepAlive = false
let notificationsDefaultType = 'info'
let notificationCounter = 0

export function useNotification (): IUseNotification {
    function setDefaultOptions (options: NotificationOptions) {
        notificationDefaultDisplayTime = options.displayTime != null ? options.displayTime : notificationDefaultDisplayTime
        notificationsDefaultKeepAlive = options.keepAlive != null ? options.keepAlive : notificationsDefaultKeepAlive
        notificationsDefaultType = options.type != null ? options.type : notificationsDefaultType
    }

    function showNotification (
        message: string,
        type = notificationsDefaultType,
        keepAlive = notificationsDefaultKeepAlive,
        displayTime = notificationDefaultDisplayTime
    ): void {
        const notification: Notification = {
            id: notificationCounter,
            message,
            displayTime,
            keepAlive,
            type
        }

        notifications.value.push(notification)

        if (!notification.keepAlive) {
            setTimeout(() => {
                closeNotification(notification.id)
            }, notification.displayTime * 1000)
        }

        notificationCounter++
    }

    function closeNotification (id: number): void {
        notifications.value = notifications.value.filter((item) => {
            return item.id !== id
        })
    }

    return {
        notifications,
        showNotification,
        closeNotification,
        setDefaultOptions
    }
}
