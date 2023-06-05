import { useCallback, useState, useEffect } from 'react';
import { AnalyticsService } from '@/lib/services/analytics.service';
import { Undefinable } from '@/lib/types';

export function useStoriesTopic() {
    const [activeStoriesTopic, setActiveStoriesTopic] = useState<Undefinable<string>>(undefined);
    const resetTopic = useCallback(() => setActiveStoriesTopic(undefined), []);
    useEffect(() => {
        if (activeStoriesTopic) {
            AnalyticsService.sendLernGrammarEvent({
                action: 'learn_gram_rules_screen_showed',
            });
        }
    }, [activeStoriesTopic]);

    return {
        activeStoriesTopic, 
        setTopic: setActiveStoriesTopic, 
        resetTopic 
    };
}