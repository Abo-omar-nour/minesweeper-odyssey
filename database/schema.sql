-- =====================================================================
-- MINESWEEPER ODYSSEY — PRODUCTION RELATIONAL DATABASE SCHEMA (PostgreSQL / Supabase)
-- =====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. جدول حسابات اللاعبين (Users / Accounts Table)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    player_sync_id VARCHAR(32) UNIQUE NOT NULL,       -- مثال: ACCT-A1B2C3D4
    email VARCHAR(255) UNIQUE,                        -- البريد الإلكتروني للحساب
    google_play_id VARCHAR(128) UNIQUE,               -- معرّف Google Play Games الرسمي
    display_name VARCHAR(100) NOT NULL DEFAULT 'Sapper',
    auth_provider VARCHAR(32) NOT NULL DEFAULT 'email', -- 'google_play' | 'email' | 'guest'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. جدول ملف اللاعب والإحصائيات والعملات (Player Profiles & Economy Table)
CREATE TABLE IF NOT EXISTS player_profiles (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    hint_coins INT NOT NULL DEFAULT 5 CHECK (hint_coins >= 0),
    is_vip_supporter BOOLEAN NOT NULL DEFAULT FALSE,
    games_played INT NOT NULL DEFAULT 0 CHECK (games_played >= 0),
    games_won INT NOT NULL DEFAULT 0 CHECK (games_won >= 0),
    daily_streak INT NOT NULL DEFAULT 0 CHECK (daily_streak >= 0),
    last_daily_date DATE,
    preferred_lang VARCHAR(8) NOT NULL DEFAULT 'ar',
    preferred_theme VARCHAR(24) NOT NULL DEFAULT 'retro',
    default_tap_mode VARCHAR(8) NOT NULL DEFAULT 'dig',
    long_press_delay_ms INT NOT NULL DEFAULT 280,
    chord_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    no_guess_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    sound_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    haptics_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. جدول تقدم الـ 50 مرحلة في طور القصة والأكاديمية (Campaign 50-Level Stars Table)
CREATE TABLE IF NOT EXISTS campaign_progress (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    level_id INT NOT NULL CHECK (level_id BETWEEN 1 AND 50),
    stars INT NOT NULL DEFAULT 0 CHECK (stars BETWEEN 0 AND 3),
    best_time_seconds INT CHECK (best_time_seconds > 0),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, level_id)
);

-- 4. جدول الأرقام القياسية لكل مستوى صعوبة (Best Clear Times Leaderboard Table)
CREATE TABLE IF NOT EXISTS best_times (
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    difficulty_key VARCHAR(24) NOT NULL CHECK (
        difficulty_key IN ('beginner', 'intermediate', 'expert', 'master', 'grandmaster', 'legend', 'nightmare')
    ),
    best_time_seconds INT NOT NULL CHECK (best_time_seconds > 0),
    achieved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, difficulty_key)
);

-- 5. جدول حفظ المباراة الجارية للاستئناف الفوري بين الأجهزة (Active Match Snapshot Table)
CREATE TABLE IF NOT EXISTS active_matches (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    difficulty_key VARCHAR(24) NOT NULL,
    story_chapter_id INT,
    is_daily_challenge BOOLEAN NOT NULL DEFAULT FALSE,
    cols INT NOT NULL,
    rows INT NOT NULL,
    mines_count INT NOT NULL,
    flags_placed INT NOT NULL DEFAULT 0,
    revealed_count INT NOT NULL DEFAULT 0,
    timer_seconds INT NOT NULL DEFAULT 0,
    cells_json JSONB NOT NULL,
    saved_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_best_times_Lookup ON best_times (difficulty_key, best_time_seconds ASC);
CREATE INDEX IF NOT EXISTS idx_users_sync_id ON users (player_sync_id);
