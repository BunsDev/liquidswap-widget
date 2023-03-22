import PAccordion from 'primevue/accordion';
import PAccordionTab from 'primevue/accordiontab';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    swap: import("pinia").Store<"swapStore", import("pinia")._UnwrapAll<Pick<{
        check: () => Promise<void>;
        isBusy: import("vue").ComputedRef<import("vue").Ref<boolean>>;
        isPoolAbsence: import("vue").ComputedRef<boolean>;
        convertRate: import("vue").Ref<number>;
        convertFee: import("vue").Ref<number>;
        convertFeeAmount: import("vue").Ref<number>;
        fromCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        interactiveField: import("vue").Ref<"from" | "to">;
        isUpdatingRate: import("vue").Ref<boolean>;
        lastInteractiveField: import("vue").Ref<"from" | "to">;
        networkId: import("vue").ComputedRef<Readonly<import("vue").Ref<number>>>;
        slippage: import("vue").Ref<number>;
        slippageAmount: import("vue").ComputedRef<number>;
        slippageIsDefault: import("vue").Ref<boolean>;
        toCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        curve: import("vue").Ref<string>;
        toggleCurrencies: () => void;
        refetchRates: (silent?: boolean) => Promise<void>;
        poolExists: import("vue").Ref<boolean>;
        convertError: import("vue").Ref<string | undefined>;
        stableSwapType: import("vue").Ref<"high" | "normal">;
        priceImpact: import("vue").ComputedRef<number>;
        priceImpactFormatted: import("vue").ComputedRef<string>;
        version: import("vue").WritableComputedRef<number>;
        predefinedCurve: import("vue").ComputedRef<string | false>;
    }, "curve" | "version" | "convertRate" | "convertFee" | "convertFeeAmount" | "fromCurrency" | "interactiveField" | "isUpdatingRate" | "lastInteractiveField" | "slippage" | "slippageIsDefault" | "toCurrency" | "poolExists" | "convertError" | "stableSwapType">>, Pick<{
        check: () => Promise<void>;
        isBusy: import("vue").ComputedRef<import("vue").Ref<boolean>>;
        isPoolAbsence: import("vue").ComputedRef<boolean>;
        convertRate: import("vue").Ref<number>;
        convertFee: import("vue").Ref<number>;
        convertFeeAmount: import("vue").Ref<number>;
        fromCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        interactiveField: import("vue").Ref<"from" | "to">;
        isUpdatingRate: import("vue").Ref<boolean>;
        lastInteractiveField: import("vue").Ref<"from" | "to">;
        networkId: import("vue").ComputedRef<Readonly<import("vue").Ref<number>>>;
        slippage: import("vue").Ref<number>;
        slippageAmount: import("vue").ComputedRef<number>;
        slippageIsDefault: import("vue").Ref<boolean>;
        toCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        curve: import("vue").Ref<string>;
        toggleCurrencies: () => void;
        refetchRates: (silent?: boolean) => Promise<void>;
        poolExists: import("vue").Ref<boolean>;
        convertError: import("vue").Ref<string | undefined>;
        stableSwapType: import("vue").Ref<"high" | "normal">;
        priceImpact: import("vue").ComputedRef<number>;
        priceImpactFormatted: import("vue").ComputedRef<string>;
        version: import("vue").WritableComputedRef<number>;
        predefinedCurve: import("vue").ComputedRef<string | false>;
    }, "networkId" | "isBusy" | "isPoolAbsence" | "slippageAmount" | "priceImpact" | "priceImpactFormatted" | "predefinedCurve">, Pick<{
        check: () => Promise<void>;
        isBusy: import("vue").ComputedRef<import("vue").Ref<boolean>>;
        isPoolAbsence: import("vue").ComputedRef<boolean>;
        convertRate: import("vue").Ref<number>;
        convertFee: import("vue").Ref<number>;
        convertFeeAmount: import("vue").Ref<number>;
        fromCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        interactiveField: import("vue").Ref<"from" | "to">;
        isUpdatingRate: import("vue").Ref<boolean>;
        lastInteractiveField: import("vue").Ref<"from" | "to">;
        networkId: import("vue").ComputedRef<Readonly<import("vue").Ref<number>>>;
        slippage: import("vue").Ref<number>;
        slippageAmount: import("vue").ComputedRef<number>;
        slippageIsDefault: import("vue").Ref<boolean>;
        toCurrency: {
            reserve: number;
            token?: string | undefined;
            amount?: number | undefined;
        };
        curve: import("vue").Ref<string>;
        toggleCurrencies: () => void;
        refetchRates: (silent?: boolean) => Promise<void>;
        poolExists: import("vue").Ref<boolean>;
        convertError: import("vue").Ref<string | undefined>;
        stableSwapType: import("vue").Ref<"high" | "normal">;
        priceImpact: import("vue").ComputedRef<number>;
        priceImpactFormatted: import("vue").ComputedRef<string>;
        version: import("vue").WritableComputedRef<number>;
        predefinedCurve: import("vue").ComputedRef<string | false>;
    }, "check" | "toggleCurrencies" | "refetchRates">>;
    version: import("vue").ComputedRef<number>;
    uc: {
        checkAndConfirm: (coin: string) => boolean;
    };
    slippageAmount: import("vue").ComputedRef<number>;
    hasSlippage: import("vue").ComputedRef<boolean>;
    convertRate: import("vue").ComputedRef<number>;
    toAmount: import("vue").ComputedRef<number | undefined>;
    toToken: import("vue").ComputedRef<string | undefined>;
    fromToken: import("vue").ComputedRef<string | undefined>;
    slippageToken: import("vue").ComputedRef<string | undefined>;
    priceImpact: import("vue").ComputedRef<string>;
    rateTokens: {
        alias: import("vue").ComputedRef<string>;
        symbol: import("vue").ComputedRef<string>;
        decimals: import("vue").ComputedRef<number>;
        formatted: import("vue").Ref<string>;
    };
    outputTokens: {
        alias: import("vue").ComputedRef<string>;
        symbol: import("vue").ComputedRef<string>;
        decimals: import("vue").ComputedRef<number>;
        formatted: import("vue").Ref<string>;
    };
    slippageOutputTokens: {
        alias: import("vue").ComputedRef<string>;
        symbol: import("vue").ComputedRef<string>;
        decimals: import("vue").ComputedRef<number>;
        formatted: import("vue").Ref<string>;
    };
    convertRateTokens: {
        alias: import("vue").ComputedRef<string>;
        symbol: import("vue").ComputedRef<string>;
        decimals: import("vue").ComputedRef<number>;
        formatted: import("vue").Ref<string>;
    };
    convertFee: import("vue").ComputedRef<number>;
    convertFeeAmount: {
        alias: import("vue").ComputedRef<string>;
        symbol: import("vue").ComputedRef<string>;
        decimals: import("vue").ComputedRef<number>;
        formatted: import("vue").Ref<string>;
    };
    isToggled: import("vue").Ref<boolean>;
    activeIndex: import("vue").WritableComputedRef<number | undefined>;
    priceImpactClass: import("vue").ComputedRef<"-green" | "-yellow" | "-red">;
    PAccordion: typeof PAccordion;
    PAccordionTab: typeof PAccordionTab;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
